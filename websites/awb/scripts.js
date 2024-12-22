function toggleHoverover() {
  const hoveroverBtn = document.getElementById('hoverover-btn');
  if (hoveroverBtn.textContent === 'Hoverover On') {
    hoveroverBtn.textContent = 'Hoverover Off';
    // Add logic to enable hoverover functionality
  } else {
    hoveroverBtn.textContent = 'Hoverover On';
    // Add logic to disable hoverover functionality
  }
}

function resetSite() {
  location.reload(); // This will reload the page to its initial state
}

// Add event listener to the logo image to reset the site
document.querySelector('.logo img').addEventListener('click', resetSite);

// JavaScript to handle the dropdown menu
function toggleDropdownMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('open');
}

// JavaScript to handle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const container = document.querySelector('.container');
  sidebar.classList.toggle('closed');
  sidebarToggle.classList.toggle('closed');
  container.classList.toggle('expanded');
  // Change the arrow direction
  if (sidebar.classList.contains('closed')) {
    sidebarToggle.innerHTML = '&#9654;'; // Right arrow
  } else {
    sidebarToggle.innerHTML = '&#9664;'; // Left arrow
  }
}

// JavaScript to handle the popout functionality
function popout(area) {
  let content;
  const targetBox = document.getElementById(area);
  if (area === 'content-viewer') {
    content = document.querySelector('.input-area-text').value;
  } else if (area === 'workbench') {
    content = document.getElementById('output').innerHTML;
  } else if (area === 'artifact') {
    content = document.getElementById('artifact').innerHTML;
  }
  const newWindow = window.open('', '_blank', 'width=800,height=600');
  newWindow.document.write(`
    <html>
      <head>
        <title>${area.charAt(0).toUpperCase() + area.slice(1)} Area</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .dock-button { padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 5px; }
          .dock-button:hover { background-color: #45a049; }
        </style>
      </head>
      <body>
        ${content}
        <br/><br/>
        <button class="dock-button" onclick="window.opener.dock('${area}'); window.close();">Dock</button>
      </body>
    </html>
  `);
  targetBox.classList.add('hidden');
}

// JavaScript to handle the dock functionality
function dock(area) {
  const targetBox = document.getElementById(area);
  targetBox.classList.remove('hidden');
}

// JavaScript to handle the expand functionality
function toggleExpand(id) {
  const allBoxes = document.querySelectorAll('.content-box');
  const targetBox = document.getElementById(id);
  const button = targetBox.querySelector('.button-container button:nth-child(2)');
  if (targetBox.classList.contains('expanded')) {
    allBoxes.forEach(box => box.classList.remove('hidden'));
    targetBox.classList.remove('expanded');
    button.textContent = '🗗';
  } else {
    allBoxes.forEach(box => box.classList.add('hidden'));
    targetBox.classList.add('expanded');
    targetBox.classList.remove('hidden');
    button.textContent = '🗕';
  }
}

// JavaScript to handle the close functionality
function closeBox(id) {
  const targetBox = document.getElementById(id);
  targetBox.classList.add('hidden');
}

// JavaScript to handle the buttons' functionalities
document.querySelectorAll('.sidebar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const workbenchHeader = document.querySelector('#workbench .content-box-header');
    workbenchHeader.textContent = 'Workbench - ' + btn.textContent;
  });
});

document.getElementById("mt-btn").addEventListener("click", function() {
  document.getElementById("output").innerHTML = '<iframe src="./images/trans.jpg" style="width: 100%; height: 100%; border: none;"></iframe>';
});

document.getElementById("llm-btn").addEventListener("click", function() {
  document.getElementById("output").innerHTML = '<img src="./images/gpt.jpg" style="width: 100%; height: 100%; border: none;">';
});

document.getElementById("cat-tool-btn").addEventListener("click", function() {
  document.getElementById("output").innerHTML = '<img src="./images/demo.gif" style="width: 100%; height: 100%; border: none;">';
});

document.getElementById("ocr-btn").addEventListener("click", function() {
  document.getElementById("output").textContent = "OCR widget opened.";
});

document.getElementById("other-btn").addEventListener("click", function() {
  document.getElementById("output").textContent = "Other widget opened.";
});

// Function to send content from Content Viewer to Workbench
function sendToBench() {
  const content = document.querySelector('.input-area-text').value;
  document.getElementById('output').innerText = content;
}

// Function to send content from Workbench to Artifact
function sendToArtifact() {
  const content = document.getElementById('output').innerHTML;
  document.getElementById('artifact').querySelector('.content-box-content').innerHTML = content;
}

// Handling Secondary Navbar Buttons
document.getElementById("button1").addEventListener("click", function() {
  alert("Button 1 clicked");
});

document.getElementById("button2").addEventListener("click", function() {
  alert("Button 2 clicked");
});

document.getElementById("button3").addEventListener("click", function() {
  alert("Button 3 clicked");
});

document.getElementById("button4").addEventListener("click", function
