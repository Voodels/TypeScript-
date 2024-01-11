document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')!;
  const input1 = document.getElementById('num1')! as HTMLInputElement;
  const text2edit = <HTMLHeadingElement>document.getElementById('text2edit')!;

  function getInpValue() {
    return input1.value;
  }

  btn.onclick = () => {
    console.log('Clicked!');
    const val: number = Number(getInpValue());

    const h2 = document.createElement('h2');
    h2.textContent = (val + 20).toString();
    document.body.append(h2);
  };
});
