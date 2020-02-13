function handleUpload (e)  {
   e.preventDefault();
   const imgData = new FormData();
   const img = document.getElementById('imgUpload').files[0];
   imgData.append('image', img);
   imgData.append('hello', 'world');
   launchRequest(imgData);
}

function launchRequest(data) {
   let od = document.getElementById('outputDiv');
   const req = new XMLHttpRequest();
   req.open('POST','http://localhost:3000/');
   req.onload = (e) => {
      if (res.status === 200 ) {
         od.innerHTML = 'Uploaded';
      }
      else
      od.innerHTML = "Piizdec N" + res.status
   }
   req.send(data);
}
