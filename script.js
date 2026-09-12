$(document).ready(function () {
  
  // Sidebar Toggle functionality using jQuery
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Tab switching logic using jQuery
  $("#sidebar-menu a").click(function (e) {
    e.preventDefault();
    
    // Manage Active State in Sidebar
    $("#sidebar-menu a").removeClass("active");
    $(this).addClass("active");

    // Hide all views and show selected view
    const targetTab = $(this).attr("data-tab");
    $(".tab-content-item").addClass("d-none");
    $("#" + targetTab + "-view").removeClass("d-none");
  });

  // Chart 1: Sales Line Chart
  const ctxSales = document.getElementById('salesChart').getContext('2d');
  new Chart(ctxSales, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Revenue ($)',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 34000],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  // Chart 2: Traffic Donut Chart
  const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
  new Chart(ctxTraffic, {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Social', 'Referral', 'Search'],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ['#2563eb', '#10b981', '#f59e0b', '#ef4444']
      }]
    },
    options: {
      responsive: true
    }
  });

});