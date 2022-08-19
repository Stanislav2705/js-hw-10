function createList(acc, countryCard) {
  return (
    acc +
    `<li class="country">
      <img
        src="${countryCard.flags.svg}"
        alt="${countryCard.name.common}"
        width="50"
      />
      <h2>${countryCard.name.common}</h2>
    </li>`
  );
}

function generateContentList(array) {
  return array.reduce(createList, '');
}

export { generateContentList };
