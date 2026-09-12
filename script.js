$(document).ready(function () {
  // 1. Sidebar Hide/Show Toggle
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // 2. Sidebar Tabs Switcher (Clicking Analytics, Users, Settings)
  $("#sidebar-menu a").click(function (e) {
    e.preventDefault();

    // Active class button color fix
    $("#sidebar-menu a").removeClass("active");
    $(this).addClass("active");

    // Hide all sections, show clicked section
    $(".dashboard-section").addClass("d-none");
    const targetSection = $(this).attr("data-target");
    $(targetSection).removeClass("d-none");
  });

  // 3. Line Chart
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Sales ($)',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true
    }
  });

  // 4. Doughnut Chart
  const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Social Media', 'Referral', 'Organic Search'],
      datasets: [{
        data: [40, 25, 15, 20],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545']
      }]
    },
    options: {
      responsive: true
    }
  });
});