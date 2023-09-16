function calculateCarbonFootprint() {
  // Obtener los valores de las entradas del formulario
  const carKm = parseFloat(document.getElementById("carKm").value);
  const planeKm = parseFloat(document.getElementById("planeKm").value);
  const renewableEnergy = document.querySelector('input[name="renewableEnergy"]:checked').value;
  const energyConsumption = parseFloat(document.getElementById("energyConsumption").value);
  const meatConsumption = parseFloat(document.getElementById("meatConsumption").value);
  const vegetableConsumption = parseFloat(document.getElementById("vegetableConsumption").value);
  const publicTransport = document.querySelector('input[name="publicTransport"]:checked').value;
  const gasConsumption = parseFloat(document.getElementById("gasConsumption").value);
  const localFood = parseFloat(document.getElementById("localFood").value);
  const recycling = document.querySelector('input[name="recycling"]:checked').value;

   // Calcular la huella de carbono total en CO2e
   let carbonFootprint = 0;

// Calcular CO2e por kilómetros en coche
const carEmissions = carKm * 2.3; // 2.3 kg CO2e por kilómetro

// Calcular CO2e por kilómetros en avión
const planeEmissions = planeKm * 0.11; // 0.11 kg CO2e por pasajero-km (vuelos de larga distancia)

// Calcular CO2e por consumo de energía
const energyEmissions = renewableEnergy === "yes" ? 0 : energyConsumption * 0.5; // 0.5 kg CO2e por kWh

// Calcular CO2e por consumo de carne
const meatEmissions = meatConsumption * 15; // 15 kg CO2e por kg de carne

// Calcular CO2e por consumo de vegetales
const vegetableEmissions = vegetableConsumption * 0.3; // 0.3 kg CO2e por kg de vegetales

// Calcular CO2e por uso de transporte público
const publicTransportEmissions = publicTransport === "yes" ? 0 : gasConsumption * 0.1; // 0.1 kg CO2e por pasajero-km

// Reducción por productos locales
const localFoodReduction = (100 - localFood) / 100;

// Calcular CO2e total
carbonFootprint = carEmissions + planeEmissions + energyEmissions + meatEmissions + vegetableEmissions + publicTransportEmissions;

// Aplicar la reducción por productos locales
carbonFootprint *= localFoodReduction;

// Aplicar reducción por reciclaje
if (recycling === "yes") {
carbonFootprint *= 0.9; // Supongamos una reducción del 10% por reciclaje
}

  // Mostrar el resultado
  document.getElementById("result").innerHTML = `Tu huella de carbono total es de: ${carbonFootprint.toFixed(2)} kg CO2e`;
}