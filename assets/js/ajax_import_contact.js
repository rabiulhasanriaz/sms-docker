/*contact upload form submit*/
function import_contact_form_submit(form_id, form_route, modal_id) {
    // $('#' + modal_id).modal('hide');

    // $("#" + modal_id +" .close").click();
    $(function () {

        $('#' + form_id).on('submit', function (e) {
            // $('#' + modal_id).modal().hide();
            $("#" + modal_id +" .modal_close").click();

            var formData = new FormData($('#' + form_id)[0]);
            // formData.append("X-CSRF-Token", $('input[name="_token"]').val());

            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: 'post',
                url: form_route,
                data: formData,
                dataType: 'JSON',
                contentType: false,
                processData: false,
                beforeSend: function () {
                    $("#loading").show();
                },
                success: function (data) {

                    if (data.errors) {
                        $('.error_messages').empty();
                        $('.success_messages').empty();
                        $('.ajax_success').hide();
                        $('.ajax_error').show();
                        $.each(data.errors, function (key, value) {
                            $('.error_messages').append('<p>' + value + '</p>');
                        });
                        $("html, body").animate({scrollTop: 0}, 1000);
                    }
                    if (data.success) {
                        $("#report-alert").hide();
                        if(data.total_contact){
                            // console.log(data.total_contact);
                            $('#count_total_number'+data.group_id).html(data.total_contact);
                        }
                        $("#current_balance").html(data.current_balance);
                        $('.success_messages').empty();
                        $('.error_messages').empty();
                        $('.ajax_error').hide();
                        // $('#' + form_id)[0].reset();
                        $('.ajax_success').show();
                        $('.success_messages').append('<p>' + data.success + '</p>');
                        $("html, body").animate({scrollTop: 0}, 1000);
                    }
                    if (data.error) {
                        $('.success_messages').empty();
                        $('.error_messages').empty();
                        $('.ajax_success').hide();
                        $('.ajax_error').show();
                        $('.error_messages').append('<p>' + data.error + '</p>');
                        $("html, body").animate({scrollTop: 0}, 1000);
                    }

                },
                complete: function () {
                    $("#loading").hide();
                },
            });

        });

    });
}