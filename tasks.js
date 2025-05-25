export default async function handler(req, res) {
  const gasURL = 'https://script.google.com/macros/s/AKfycbxUzQIc5LGAsmESzUKcE5SWatPslHwyWzFTvWD6s_GFF2h4t6MxtD5JmHjpJySsDBX3xg/exec?action=getTasks';

  try {
    const response = await fetch(gasURL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'ไม่สามารถโหลดข้อมูลจาก GAS ได้' });
  }
}
