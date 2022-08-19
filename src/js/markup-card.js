export function createCardRef(country) {
  const lang = Object.values(country.languages).join(', ');
  const text = `
  <img src="${country.flags.svg}" alt="${country.name.common}" width="60" height="60">
  <h2>${country.name.common}</h2>
          <p><b>Capital</b>: ${country.capital[0]}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Languages</b>: ${lang}</p>
        `;

  return text;
}
