(function () {
        function send(cmd, id, slot, pt, ptl, pl, pi, px, xll) {
            try {
                var u = 'https://cdnpure.com/v1/ads';
                u += '?cmd=' + cmd;
                u += '&id=' + id;
                u += '&slot=' + slot;
                if (pt) { u += '&pt=' + pt; }
                if (ptl) { u += '&ptl=' + ptl; }
                if (pl) { u += '&pl=' + pl; }
                if (pi) { u += '&pi=' + pi; }
                if (px) { u += '&px=' + px; }
                if (xll) { u += '&xll=' + xll; }
                u += '&r=' + encodeURIComponent(document.referrer);
                $.ajax({
                    url: u,
                    type: 'GET',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function (data) {
                        if(data && data.slot){
                            switch (data.t) {
                                case 'html':
                                    $('.adsbypure[data-ad-slot=' + data.slot + ']').html(data.html);
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            } catch (e) { }
        }
        $(function(){ 
            $('.adsbypure').each(function () {
                var id = $(this).attr('data-ad-id');
                var slot = $(this).attr('data-ad-slot');
                var pt = $(this).attr('data-pure-t');
                var ptl = $(this).attr('data-pure-tl');
                var pl = $(this).attr('data-pure-l');
                var pi = $(this).attr('data-pure-i');
                var px = $(this).attr('data-pure-x');
                var xll = $(this).attr('data-pure-xll');
                if (id && slot) {
                    setTimeout(function () {send('ads', id, slot, pt, ptl, pl, pi, px, xll);},2000)
                }
            });
        });
    })();