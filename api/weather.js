export default async function handler(request, response) {
  const { city } = request.query;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!city) {
    return response.status(400).json({ error: 'City is required' });
  }

  if (!apiKey) {
    return response.status(500).json({ error: 'API key is missing' });
  }

  try {
    const fetchResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    );
    
    const data = await fetchResponse.json();
    return response.status(fetchResponse.status).json(data);
  } catch (error) {
    return response.status(500).json({ error: 'Error fetching weather data' });
  }
}
