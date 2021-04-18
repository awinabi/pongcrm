export default () => {
  return {
    color: 'red',

    toggleColor() {
      if (this.color == 'red')
        this.color = 'green';
      else
        this.color = 'red';
    }
  };
}
