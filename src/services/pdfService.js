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

export const generatePDF = async (templatePath, formData) => {
  try {
    // Fetch PDF template
    const response = await fetch(templatePath);
    if (!response.ok) throw new Error(`Failed to load template: ${response.statusText}`);
    const pdfBytes = await response.arrayBuffer();

    // Load PDF and register fontkit
    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.registerFontkit(fontkit);

    // Load and Embed a Turkish-supported font (replace with your actual font path)
    const fontBytes = await fetch('/fonts/OpenSans-Regular.ttf').then(res => res.arrayBuffer());
    const customFont = await pdfDoc.embedFont(fontBytes);

    // Get the form
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    
    console.log('Available fields:', fields.map(f => f.getName()));

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

    // Make sure all field appearances are updated before flattening
    form.updateFieldAppearances();
    
    // Flatten the form to make it non-editable
    form.flatten();

    // Save updated PDF
    return await pdfDoc.save();
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