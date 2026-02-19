document.querySelectorAll('.rotator').forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let i = 0;

  cases[i].classList.add('rotator__case_active');

  setInterval(() => {
    cases[i].classList.remove('rotator__case_active');
    i = (i + 1) % cases.length;
    cases[i].classList.add('rotator__case_active');

    const color = cases[i].dataset.color;

    if (color) cases[i].style.color = color;

  }, 1000);

})