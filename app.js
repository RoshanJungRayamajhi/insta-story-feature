var arr = [
  {
    dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://media.istockphoto.com/id/953909180/photo/portrait-of-a-young-beautiful-european-woman.jpg?s=1024x1024&w=is&k=20&c=AYxVae-_UvV6mkIt7yxnS601Ei_tlrsqhwvXV-5dnfQ=",
    img: "https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var clutter = "";
arr.forEach(function (items, index) {
  clutter += `<div id="golo">
  <img id="${index}" src="${items.dp}" alt="">
</div>
`;
});

document.querySelector("#story").innerHTML = clutter;
document.querySelector("#story").addEventListener("click", function (details) {
  document.querySelector("#fullscreen").style.display = "initial";
  document.querySelector("#fullscreen").style.backgroundImage = `url(${
    arr[details.target.id].img
  })`;
  setTimeout(() => {
    document.querySelector("#fullscreen").style.display = "none";
  }, 3000);

  var growth = 0;
  setInterval(() => {
    document.querySelector("#grow").style.width = `${growth}%`;
    growth++;
    document.querySelector("#grow").style.transition = "all ease-in-out";
  }, 30);
});
