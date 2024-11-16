jQuery(document).ready(function ($) {
    if (!window.location.pathname.startsWith('/career')) {
        return;
    }

    function getElement(title, department, location, type, link) {
        return `
<a href="${link}" target="_blank" style="text-decoration: initial; color:white;">
  <div class="main-job-div" style="margin-bottom: 5px; background-color: #16171B; color: white; padding: 12px 16px; font-family: Arial, sans-serif; display: flex; justify-content: space-between; align-items: center; border-radius: 8px;">
    <div style="display: flex; flex-direction: column;">
      <span style="font-size: 14px; font-weight: 400; color: #C66BD5;">${department}</span>
      <span style="font-size: 18px; font-weight: 500;">${title}</span>
      <div style="display: flex; align-items: center; margin-top: 8px;">
        <span style="font-size: 14px; margin-right: 16px; color: #C5C9D9; display:flex; align-items: center;">
          <svg style="width: 16px; height: 16px; fill: #C5C9D9; margin-right: 4px; vertical-align: middle;" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${location}
        </span>
        <span style="font-size: 14px; color: #C5C9D9; display:flex; align-items: center;">
          <svg style="margin-right: 6px;" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4375 4.1875H9.75C8.565 4.1875 8.0625 3.685 8.0625 2.5V0.8125L11.4375 4.1875ZM12 5.3125V11.5C12 13 11.25 13.75 9.75 13.75H3C1.5 13.75 0.75 13 0.75 11.5V2.5C0.75 1 1.5 0.25 3 0.25H6.9375V2.5C6.9375 4.315 7.935 5.3125 9.75 5.3125H12ZM4.3125 10C4.3125 9.6895 4.0605 9.4375 3.75 9.4375C3.4395 9.4375 3.1875 9.6895 3.1875 10C3.1875 10.3105 3.4395 10.5625 3.75 10.5625C4.0605 10.5625 4.3125 10.3105 4.3125 10ZM4.3125 7C4.3125 6.6895 4.0605 6.4375 3.75 6.4375C3.4395 6.4375 3.1875 6.6895 3.1875 7C3.1875 7.3105 3.4395 7.5625 3.75 7.5625C4.0605 7.5625 4.3125 7.3105 4.3125 7ZM9.5625 10C9.5625 9.6895 9.3105 9.4375 9 9.4375H5.625C5.3145 9.4375 5.0625 9.6895 5.0625 10C5.0625 10.3105 5.3145 10.5625 5.625 10.5625H9C9.3105 10.5625 9.5625 10.3105 9.5625 10ZM9.5625 7C9.5625 6.6895 9.3105 6.4375 9 6.4375H5.625C5.3145 6.4375 5.0625 6.6895 5.0625 7C5.0625 7.3105 5.3145 7.5625 5.625 7.5625H9C9.3105 7.5625 9.5625 7.3105 9.5625 7Z" fill="#C5C9D9"/>
          </svg>
          ${type}
        </span>
      </div>
    </div>
      <svg class="non-hover-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#1C212A"/>
        <path d="M27.7498 13V23C27.7498 23.414 27.4138 23.75 26.9998 23.75C26.5858 23.75 26.2498 23.414 26.2498 23V14.811L14.5298 26.531C14.3838 26.677 14.1918 26.751 13.9998 26.751C13.8078 26.751 13.6157 26.678 13.4698 26.531C13.1768 26.238 13.1768 25.763 13.4698 25.47L25.1897 13.75H16.9998C16.5858 13.75 16.2498 13.414 16.2498 13C16.2498 12.586 16.5858 12.25 16.9998 12.25H26.9998C27.0978 12.25 27.1949 12.2701 27.2869 12.3081C27.4699 12.3841 27.6159 12.5301 27.6929 12.7141C27.7299 12.8051 27.7498 12.902 27.7498 13Z" fill="white"/>
      </svg>
      <img alt="pepe" class="hover-svg" src="data:image/svg+xml,%3Csvg%20class%3D%22hover-svg%22%20width%3D%2258%22%20height%3D%2258%22%20viewBox%3D%220%200%2058%2058%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%2229%22%20y%3D%220.714844%22%20width%3D%2240%22%20height%3D%2240%22%20rx%3D%2220%22%20transform%3D%22rotate(45%2029%200.714844)%22%20fill%3D%22url(%23paint0_linear_1_6241)%22%2F%3E%3Crect%20x%3D%2229%22%20y%3D%22-3.5278%22%20width%3D%2246%22%20height%3D%2246%22%20rx%3D%2223%22%20transform%3D%22rotate(45%2029%20-3.5278)%22%20stroke%3D%22url(%23paint1_linear_1_6241)%22%20stroke-opacity%3D%220.24%22%20stroke-width%3D%226%22%2F%3E%3Cpath%20d%3D%22M39.4301%2029.5295L32.359%2036.6006C32.0663%2036.8933%2031.5911%2036.8933%2031.2984%2036.6006C31.0056%2036.3078%2031.0056%2035.8326%2031.2984%2035.5399L37.0888%2029.7494L20.5143%2029.7494C20.3078%2029.7494%2020.1197%2029.666%2019.984%2029.5302C19.8482%2029.3944%2019.764%2029.207%2019.7647%2028.9999C19.7647%2028.5855%2020.1006%2028.2496%2020.515%2028.2496L37.0895%2028.2496L31.2984%2022.4584C31.0056%2022.1657%2031.0056%2021.6905%2031.2984%2021.3978C31.5911%2021.105%2032.0663%2021.105%2032.359%2021.3978L39.4301%2028.4688C39.4994%2028.5381%2039.5538%2028.621%2039.592%2028.7129C39.6677%2028.8961%2039.6677%2029.1026%2039.592%2029.2871C39.5538%2029.3776%2039.4994%2029.4602%2039.4301%2029.5295Z%22%20fill%3D%22white%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_1_6241%22%20x1%3D%2230.5152%22%20y1%3D%229.1359%22%20x2%3D%2262.753%22%20y2%3D%224.16538%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23DB519E%22%2F%3E%3Cstop%20offset%3D%220.499028%22%20stop-color%3D%22%23C14DD4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236A6AFB%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint1_linear_1_6241%22%20x1%3D%2231.9121%22%20y1%3D%223.15459%22%20x2%3D%2269.0352%22%20y2%3D%2240.2777%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23B14BF4%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%237279FC%22%20stop-opacity%3D%220.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%237279FC%22%20stop-opacity%3D%220.3%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" /> 
  </div>
</a>
`;
    }

    let elements;

    function loadCareers(isFirstRun) {
        $.ajax({
            url: ajax_obj.ajax_url,
            type: 'POST',
            data: {
                action: 'get_careers',
            },
            success: function (response) {
                if (isFirstRun) {
                    $('#careers-header').html(
                        `
                                <div class="container">
                                  <div data-value="All" class="link selected">View All</div>
                                  <div data-value="AI" class="link">AI</div>
                                  <div data-value="Customer Service" class="link">Customer Service</div>
                                  <div data-value="Design" class="link">Design</div>
                                  <div data-value="Engineering" class="link">Engineering</div>
                                  <div data-value="Marketing" class="link">Marketing</div>
                                  <div data-value="Product" class="link">Product</div>
                                </div>
                              `
                    ).on('click', (event) => {
                        event.preventDefault();
                        if (!event.target.dataset.value || event.target.classList.contains('selected')) {
                            return;
                        }
                        $('.link').removeClass('selected');
                        event.target.classList.add('selected');
                        $('#careers-container')
                            .html(
                                response.data.results.filter(a => a.departmentName === event.target.dataset.value || event.target.dataset.value === 'All').map(a => getElement(a.title, a.departmentName, a.locationName, a.employmentType, a.externalLink)
                                )
                            );
                    });
                }
                if (response.success) {
                    elements = response.data.results;
                    $('#careers-container')
                        .html(
                            response.data.results
                                .map(a => getElement(a.title, a.departmentName, a.locationName, a.employmentType, a.externalLink))
                        );
                    $('.link').each((index, el) => {
                        const value = $(el).data('value');
                        const amount = elements.filter(a => a.departmentName === value || value === 'All').length;
                        const amountDiv = $('<div>', {
                            class: 'amount-circle',
                            text: amount
                        }).css({
                            'background-color': '#1C1F28',
                            'color': 'white',
                            'border-radius': '50%',
                            'padding': '6px',
                            'margin-left': '5px',
                            'display': 'inline-flex',
                            'align-items': 'center',
                            'justify-content': 'center',
                            'font-size':'14px',
                            'min-width': '20px',
                            'height': '20px',
                            'line-height': '1',
                        });

                        $(el).append(amountDiv);
                    })
                } else {
                    console.log('Error:', response.data);
                }
            }
        });
    }

    // Initial load
    loadCareers(true);

    // On category change
    $('#career-filter').on('change', function () {
        const selectedCategory = $(this).val();
        loadCareers(selectedCategory);
    });
});
