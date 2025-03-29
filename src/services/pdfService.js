import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

export const createGumruklemeTalimatPDF = async (logoPath) => {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Embed the logo
    const logoBytes = await fetch(logoPath).then((res) => res.arrayBuffer());
    const logoImage = await pdfDoc.embedPng(logoBytes);
    const logoDims = logoImage.scale(0.25);

    // Add a page to the document
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points (width x height)
    const { width, height } = page.getSize();

    // Embed a font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Draw the header
    page.drawImage(logoImage, {
      x: 50,
      y: height - 100,
      width: logoDims.width,
      height: logoDims.height,
    });

    page.drawText('BARTA LOGISTICS', {
      x: 150,
      y: height - 50,
      size: 18,
      font,
      color: rgb(0.5, 0, 0),
    });

    page.drawText('251 Cleveland Street, Birkenhead CH41 3PQ', {
      x: 150,
      y: height - 70,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText('+44 7757863556', {
      x: 150,
      y: height - 85,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText('info@bartalogistics.com', {
      x: 150,
      y: height - 100,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    page.drawText('www.bartalogistics.com', {
      x: 150,
      y: height - 115,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    // Draw the title
    page.drawText('GÜMRÜKLEME TALİMATI', {
      x: width / 2 - 100,
      y: height - 150,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    // Draw the table
    const tableStartY = height - 200;
    const rowHeight = 25;
    const colWidths = [150, 300]; // Column widths

    const fields = [
      'GONDERICI ADRES',
      'ALICI ADRES',
      'BILDIR',
      'KAP ADETI',
      'AGIRLIK',
      'NAKLIYECI',
      'BEYANNAME TESLIM',
      'TR GUMRUK',
      'UK GUMRUK',
      'VSL NAME / VOY',
      'KONTEYNIR NO',
    ];

    fields.forEach((field, index) => {
      const y = tableStartY - index * rowHeight;

      // Draw field name
      page.drawText(`${field} :`, {
        x: 50,
        y: y - 15,
        size: 10,
        font,
        color: rgb(0, 0, 0),
      });

      // Draw a rectangle for the value
      page.drawRectangle({
        x: 200,
        y: y - 20,
        width: colWidths[1],
        height: rowHeight - 5,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });
    });

    // Draw footer
    page.drawText(
      'YUKARIDA DETAYLARI VERILMIS OLAN YUKUN TARAFINIZCA ISLEMLERININ YAPILMASINI RICA EDERIZ.',
      {
        x: 50,
        y: 50,
        size: 10,
        font,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText('BARTA LOGISTICS', {
      x: 50,
      y: 30,
      size: 10,
      font,
      color: rgb(0, 0, 0),
    });

    // Save the PDF
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error('Error creating PDF template:', error);
    throw new Error(`Failed to create PDF template: ${error.message}`);
  }
};

// Add this new function after the existing ones

export const appendAdditionalPages = async (mainPdfBytes, additionalPdfPaths) => {
  try {
    // Load the main PDF document
    const mainPdfDoc = await PDFDocument.load(mainPdfBytes);
    
    // Process each additional PDF file
    for (const pdfPath of additionalPdfPaths) {
      // Fetch the additional PDF
      const response = await fetch(pdfPath);
      if (!response.ok) {
        console.warn(`Failed to load additional PDF ${pdfPath}. Skipping.`);
        continue;
      }
      
      const additionalPdfBytes = await response.arrayBuffer();
      const additionalPdfDoc = await PDFDocument.load(additionalPdfBytes);
      
      // Copy all pages from the additional PDF to the main PDF
      const additionalPages = await mainPdfDoc.copyPages(
        additionalPdfDoc, 
        additionalPdfDoc.getPageIndices()
      );
      
      // Add each copied page to the main document
      for (const page of additionalPages) {
        mainPdfDoc.addPage(page);
      }
    }
    
    // Save the combined PDF
    return await mainPdfDoc.save();
  } catch (error) {
    console.error('Error appending additional pages:', error);
    throw new Error(`Failed to append additional pages: ${error.message}`);
  }
};

// Update the existing generatePDF function
// Update the generatePDF function in pdfService.js
export const generatePDF = async (templatePath, formData, templateId) => {
  try {
    // Fetch PDF template
    const response = await fetch(templatePath);
    if (!response.ok) throw new Error(`Failed to load template: ${response.statusText}`);
    const pdfBytes = await response.arrayBuffer();

    // Load PDF and register fontkit
    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.registerFontkit(fontkit);

    // Load and Embed a font
    const fontBytes = await fetch('/fonts/OpenSans-Regular.ttf').then(res => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    // Get the form
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    
    console.log('Available fields:', fields.map(f => f.getName()));

    // Extract document points before filling the form - we'll handle them separately
    let documentPoints = [];
    if (templateId === 'offerTemplate' && formData.documentPoints && Array.isArray(formData.documentPoints)) {
      documentPoints = formData.documentPoints.filter(point => point.trim());
      
      // Remove from formData to avoid double processing
      delete formData.documentPoints;
    }

    // Fill form fields
    Object.entries(formData).forEach(([fieldName, value]) => {
      if (value === null || value === undefined) return;

      try {
        const textField = form.getTextField(fieldName);
        textField.setText(String(value));
        textField.updateAppearances(customFont);
      } catch (e) {
        console.warn(`Could not fill field "${fieldName}": ${e.message}`);
      }
    });

    // Process document points with even spacing if they exist
    if (documentPoints.length > 0) {
      // Get the page where document points should be placed
      const pages = pdfDoc.getPages();
      
      // Assuming document points go on the second page
      // If your PDF is structured differently, adjust the page index
      const documentPointsPage = pages[1] || pages[0];
      
      const { width, height } = documentPointsPage.getSize();
      
      // Define the area for document points
      const startY = height - 200; // Starting Y position (adjust as needed)
      const endY = 100; // Ending Y position (adjust as needed)
      const availableHeight = startY - endY;
      
      // Calculate spacing between points
      const pointSpacing = availableHeight / (documentPoints.length + 1);
      
      // Draw each document point at evenly spaced positions
      documentPoints.forEach((point, index) => {
        const y = startY - ((index + 1) * pointSpacing);
        
        documentPointsPage.drawText(`${index + 1}. ${point}`, {
          x: 50, // Left margin
          y: y,
          size: 12,
          font: customFont,
          color: rgb(0, 0, 0),
          maxWidth: width - 100, // Allow text wrapping
        });
      });
    }

    // Make sure all field appearances are updated before flattening
    form.updateFieldAppearances();
    
    // Flatten the form to make it non-editable
    form.flatten();

    // Save the filled PDF
    let finalPdfBytes = await pdfDoc.save();
    
    // If this is the offer template, append additional documents
    if (templateId === 'offerTemplate') {
      const additionalDocuments = [
        '/templates/vekaletname.pdf',
        '/templates/bartatermsandconditions.pdf'
      ];
      
      finalPdfBytes = await appendAdditionalPages(finalPdfBytes, additionalDocuments);
    }
    
    return finalPdfBytes;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error(`Failed to generate PDF: ${error.message}`);
  }
};

export const downloadPDF = (pdfBytes, filename = 'document.pdf') => {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};