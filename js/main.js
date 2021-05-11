var slider = document.getElementById('slider');
var selector = document.getElementById('selector');
var progressBar = document.getElementById('progressBar');

slider.oninput = function () {
  selector.style.left = this.value * 20 + '%';
  progressBar.style.width = this.value * 20 + '%';
  console.log(this.value);
  switch (this.value) {
    case '0':
      $('.pageViewPricing > p').text('1K pageviews');
      $('.pricing').text('$2.00');
      break;
    case '1':
      $('.pageViewPricing > p').text('10K pageviews');
      $('.pricing').text('$8.00');
      break;
    case '2':
      $('.pageViewPricing > p').text('50K pageviews');
      $('.pricing').text('$12.00');
      break;
    case '3':
      $('.pageViewPricing > p').text('100K pageviews');
      $('.pricing').text('$16.00');
      break;
    case '4':
      $('.pageViewPricing > p').text('500K pageviews');
      $('.pricing').text('$24.00');
      break;
    case '5':
      $('.pageViewPricing > p').text('1M pageviews');
      $('.pricing').text('$36.00');
      break;
  }
};
