export const templates = [
  // New template for Yukleme Talimati (Loading Instructions)
  {
    id: 'yuklemeTalimati',
    name: 'Yükleme Talimatı',
    description: 'Yükleme bilgilerini içeren standart talimat formu',
    filePath: '/templates/yukleme-talimati-template.pdf',
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
  }
];

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id) || null;
};