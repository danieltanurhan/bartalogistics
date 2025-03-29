export const templates = [
  // New template for Yukleme Talimati (Loading Instructions)
  {
    id: 'yuklemeTalimati',
    name: 'Yükleme Talimatı',
    description: 'Yükleme bilgilerini içeren standart talimat formu',
    filePath: '/templates/SHIPPING_NOTE_TEMPLATE.pdf',
    fields: [
      { name: 'shipper', label: 'Shipper', type: 'textarea', required: true },
      { name: 'consignee', label: 'Consignee', type: 'textarea', required: true },
      { name: 'notify', label: 'Notify Party', type: 'textarea', required: true },
      { name: 'vesselNameVoyage', label: 'Vessel Name / Voyage', type: 'text', required: true },
      { name: 'portOfLoading', label: 'Port of Loading', type: 'text', required: true },
      { name: 'portOfDischarge', label: 'Port of Discharge', type: 'text', required: true },
      { name: 'placeOfDelivery', label: 'Place of Delivery', type: 'text', required: true },
      { name: 'marksAndNos', label: 'Marks & Nos', type: 'text', required: false },
      { name: 'descriptionOfGoods', label: 'Description of Goods', type: 'textarea', required: true },
      { name: 'packages', label: 'Packages', type: 'number', required: true },
      { name: 'weight', label: 'Weight', type: 'number', required: true },
      { name: 'freight', label: 'Freight', type: 'text', required: true },
      { name: 'billOfLading', label: 'Bill of Lading (B/L)', type: 'text', required: true },
      { name: 'containerNumber', label: 'Container No', type: 'text', required: true },
      { name: 'customsAgent', label: 'Customs Agent', type: 'text', required: true }
    ]
  },
  
  // New template for Gumrukleme Talimati (Customs Instructions)
  {
    id: 'gumruklemeTalimati',
    name: 'Gümrükleme Talimatı',
    description: 'Gümrük işlemleri için standart talimat formu',
    filePath: '/templates/GUMRUKLEME_TALIMATI_TEMPLATE.pdf',
    fields: [
      { name: 'gondericiAdres', label: 'Gönderici Adres', type: 'textarea', required: true },
      { name: 'aliciAdres', label: 'Alıcı Adres', type: 'textarea', required: true },
      { name: 'bildir', label: 'Bildirilecek', type: 'textarea', required: true },
      { name: 'kapAdeti', label: 'Kap Adeti', type: 'number', required: true },
      { name: 'agirlik', label: 'Ağırlık', type: 'number', required: true },
      { name: 'nakliyeci', label: 'Nakliyeci', type: 'textarea', required: true },
      { name: 'beyannameTeslim', label: 'Beyanname Teslim', type: 'text', required: true },
      { name: 'trGumruk', label: 'TR Gümrük', type: 'text', required: true },
      { name: 'ukGumruk', label: 'UK Gümrük', type: 'text', required: true },
      { name: 'vesselNameVoyage', label: 'Vessel Name / Voyage', type: 'text', required: true },
      { name: 'konteynirNo', label: 'Konteynır No', type: 'text', required: true }
    ]
  },
  {
    id: 'offerTemplate',
    name: 'Trade Offer',
    description: 'Detailed price offer with terms and conditions',
    filePath: '/templates/OFFER_TEMPLATE.pdf',
    fields: [
      { name: 'tradeQuoteId', label: 'Trade Quote ID', type: 'text', required: true },
      { name: 'description', label: 'Description', type: 'textarea', required: true },
      { name: 'preparedFor', label: 'Prepared for', type: 'text', required: true },
      { name: 'preparedBy', label: 'Prepared by', type: 'text', required: true },
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'consignee', label: 'Consignee', type: 'text', required: true },
      { name: 'origin', label: 'Origin', type: 'text', required: true },
      { name: 'destination', label: 'Destination', type: 'text', required: true },
      { name: 'goods', label: 'Goods', type: 'text', required: true },
      { name: 'volume', label: 'Volume', type: 'text', required: true },
      { name: 'method', label: 'Method', type: 'text', required: true },
      { name: 'terms', label: 'Terms', type: 'text', required: true },
      { name: 'payment', label: 'Payment', type: 'text', required: true },
      { name: 'comments', label: 'Comments', type: 'textarea', required: false },
      { name: 'priceIncludes', label: 'Price Includes', type: 'textarea', required: false },
      { name: 'transitTime', label: 'Transit Time', type: 'textarea', required: false },
      { name: 'priceExcludes', label: 'Price Excludes', type: 'textarea', required: false },
      { name: 'totalCharges', label: 'Total Charges', type: 'text', required: true },
      { name: 'documentPoints', label: 'Document Points', type: 'documentPoints', required: false }
    ]
  }
];

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id) || null;
};