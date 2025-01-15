document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const searchQuery = document.getElementById('sociologist-search').value;

  // Enviar uma requisição ao backend para buscar o sociólogo
  fetch(`/searchSociologist?name=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        // Se o sociólogo for encontrado, fazer o globo girar até o local dele
        moveGlobeToLocation(data.latitude, data.longitude);
      } else {
        alert('Sociólogo não encontrado');
      }
    });
});

// Rota de pesquisa no backend
app.get('/searchSociologist', async (req, res) => {
  const name = req.query.name;
  
  // Procurar o sociólogo no banco de dados
  const sociologist = await Sociologist.findOne({ name: new RegExp(name, 'i') });

  if (sociologist) {
    res.json({
      name: sociologist.name,
      latitude: sociologist.latitude,
      longitude: sociologist.longitude
    });
  } else {
    res.json(null);
  }
});

function moveGlobeToLocation(latitude, longitude) {
  map.flyTo({
    center: [longitude, latitude],
    zoom: 5, // ou o nível de zoom desejado
    speed: 0.8, // velocidade da animação
    curve: 1, // suavizar a animação
  });

  // Aqui você pode adicionar um marcador no Mapbox
  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
}
