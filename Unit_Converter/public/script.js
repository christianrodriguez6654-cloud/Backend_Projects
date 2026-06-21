const form = document.getElementById('convertForm');
const typeInput = document.getElementById('typeInput');
let currentType = 'length';

const units = {
  length: ['m', 'cm', 'mm', 'ft', 'in', 'yd'],
  temperature: ['C', 'F', 'K'],
  weight: ['kg', 'g', 'mg', 'lb', 'oz']
};

// Cambiar pestañas
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentType = e.target.dataset.type;
    updateDropdowns();
    document.getElementById('resultBox').classList.add('hidden');
  });
});

function updateDropdowns() {
  const fromSel = document.getElementById('fromUnit');
  const toSel = document.getElementById('toUnit');
  fromSel.innerHTML = '';
  toSel.innerHTML = '';
  
  units[currentType].forEach(unit => {
    fromSel.add(new Option(unit, unit));
    toSel.add(new Option(unit, unit));
  });
  // Seleccionar diferente por defecto si es posible
  if (units[currentType].length > 1) toSel.value = units[currentType][1];
}

// Enviar al backend
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = document.getElementById('inputValue').value;
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultBox = document.getElementById('resultBox');
  const resultValue = document.getElementById('resultValue');

  try {
    const res = await fetch('/api/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: currentType, value, from, to })
    });
    
    const data = await res.json();
    if (data.success) {
      resultValue.textContent = `${data.data.converted.value} ${data.data.converted.unit}`;
      resultBox.classList.remove('hidden');
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert('Error de conexión');
  }
});

// Inicializar
updateDropdowns();   