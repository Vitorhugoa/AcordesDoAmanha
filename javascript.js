// const myObserve = new IntersectionObserver(entries => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     });
//     console.log(entries);
// });
// const Elements = document.querySelectorAll('.hidden');

// Elements.forEach( (element) => myObserve.observe(element) );

document.addEventListener('DOMContentLoaded', () => {
    const myObserve = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          myObserve.unobserve(entry.target); // Stop observing after showing
        } else {
          entry.target.classList.remove('show');
        }
        console.log(entry); // Log individual entries
      });
    }, { threshold: 0.1 }); // Add threshold option
  
    const Elements = document.querySelectorAll('.hidden');
    Elements.forEach((element) => myObserve.observe(element));

  });

  