/*sms send form submit*/
function sms_send_form_submit(form_id, form_route) {
    $(function () {

        $('#' + form_id).on('submit', function (e) {
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
                    //console.log(data);
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
                        $("#current_balance").html(data.current_balance);
                        $('.success_messages').empty();
                        $('.error_messages').empty();
                        $('.ajax_error').hide();
                        // $('#' + form_id)[0].reset();
                        // $('.chosen-single.chosen-single-with-deselect').addClass('chosen-default');
                        // $('.chosen-single.chosen-single-with-deselect>span').html('Select Sender ID..');
                        $("#cphone").val('');
                        $(".count_me.form-control").val('');
                        $(".ace-file-name").val('');
                        $(".search-choice-close").click();
                        $('.ajax_success').show();
                        $('.success_messages').append('<p>' + data.success + '</p>');
                        $('#current_balance').html(data.current_balance);
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


/*sms send form submit*/
function valid_dynamic_sms_file(form_id, route) {

    $(function () {

        var formData = new FormData($('#' + form_id)[0]);
        // formData.append("X-CSRF-Token", $('input[name="_token"]').val());

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'post',
            url: route,
            data: formData,
            dataType: 'JSON',
            contentType: false,
            processData: false,
            beforeSend: function () {
                $("#loading").show();
            },
            success: function (data) {
                $("#columnNames").empty();
                $("#dynamic_number_column").empty();
                $('.error_messages').empty();
                $('.success_messages').empty();
                if (data.errors) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $.each(data.errors, function (key, value) {
                        $('.error_messages').append('<p>' + value + '</p>');
                    });
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if (data.success) {
                    $("#current_balance").html(data.current_balance);
                    $('.ajax_error').hide();
                    $(".search-choice-close").click();
                    $('.ajax_success').show();
                    $('.success_messages').append('<p>' + data.success + '</p>');
                    $('#current_balance').html(data.current_balance);
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if (data.error) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $('.error_messages').append('<p>' + data.error + '</p>');
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if(data.columns){
                    $('.ajax_success').hide();
                    $('.ajax_error').hide();
                    var countColumn = 1;
                    $('#dynamic_number_column').append("<option></option>");
                    $.each(data.columns, function (key, value) {
                        // if(countColumn!=1) {
                        // $("#columnNames").append('<input id="val_' + countColumn + '" type="checkbox" name="columnsVal[]" value="' + countColumn + '">\n' +
                        //         '                        <label for="val_' + countColumn + '">' + value + '</label>\n');
                        /*}else{
                            $("#columnNames").append('<input onchange="this.checked=true;" checked id="val_' + countColumn + '" type="checkbox" name="columnsVal[]" value="' + countColumn + '">\n' +
                                '                        <label for="val_' + countColumn + '">' + value + '</label>\n');
                        }*/
                        $("#columnNames").append('<button type="button" class="btn btn-xs" value="'+ value +'" id="" onclick="getSmsField(this.value)">'+ value +'</button> ');
                        $('#dynamic_number_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        countColumn++;
                    });
                    $(".dynamic_msg").show();
                }

            },
            complete: function () {
                $("#loading").hide();
            },
        });

    });
}

/*sms send form submit*/
function valid_dynamic_flexiload_file(form_id, route) {

    $(function () {

        var formData = new FormData($('#' + form_id)[0]);
         console.log(formData);
        // formData.append("X-CSRF-Token", $('input[name="_token"]').val());

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'post',
            url: route,
            data: formData,
            dataType: 'JSON',
            contentType: false,
            processData: false,
            beforeSend: function () {
                $("#loading").show();
            },
            success: function (data) {
                $("#dynamic_number_column").empty();
                $("#dynamic_amount_column").empty();
                $("#dynamic_number_operator_column").empty();
                $('.error_messages').empty();
                $('.success_messages').empty();
                if (data.errors) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $(".dynamic_msg").hide();
                    $.each(data.errors, function (key, value) {
                        $('.error_messages').append('<p>' + value + '</p>');
                    });
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if (data.error) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $('.error_messages').append('<p>' + data.error + '</p>');
                    $(".dynamic_msg").hide();
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if(data.columns){
                    
                    $('.ajax_success').hide();
                    $('.ajax_error').hide();
                    var countColumn = 1;
                    $('#dynamic_number_column').append("<option></option>");
                    $('#dynamic_amount_column').append("<option></option>");
                    $('#dynamic_number_type_column').append("<option></option>");
                    $('#dynamic_name_column').append("<option></option>");
                    $('#dynamic_number_operator_column').append("<option></option>");
                    $('#dynamic_remarks_column').append("<option></option>");
                    
                    $.each(data.columns, function (key, value) {
                        // console.log(value);
                        $("#dynamic_amount_column").append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_type_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_name_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_operator_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_remarks_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        countColumn++;
                    });
                    $(".dynamic_msg").show();
                }
            },
            complete: function () {
                $("#loading").hide();
            },
        });

    });
}

// Dynamic excel file for creating flexibook
function valid_dynamic_flexiBook_file(form_id, route) {

    $(function () {

        var formData = new FormData($('#' + form_id)[0]);
        // formData.append("X-CSRF-Token", $('input[name="_token"]').val());

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'post',
            url: route,
            data: formData,
            dataType: 'JSON',
            contentType: false,
            processData: false,
            beforeSend: function () {
                $("#loading").show();
            },
            success: function (data) {
                $("#dynamic_number_column").empty();
                $("#dynamic_amount_column").empty();
                $("#dynamic_name_column").empty();
                $("#dynamic_remarks_column").empty();
                $("#dynamic_number_type_column").empty();
                $("#dynamic_number_operator_column").empty();

                $('.error_messages').empty();
                $('.success_messages').empty();

                
                if (data.errors) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $(".dynamic_msg").hide();
                    $.each(data.errors, function (key, value) {
                        $('.error_messages').append('<p>' + value + '</p>');
                    });
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if (data.error) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $('.error_messages').append('<p>' + data.error + '</p>');
                    $(".dynamic_msg").hide();
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if(data.columns){
                    
                    $('.ajax_success').hide();
                    $('.ajax_error').hide();
                    var countColumn = 1;
                    $('#dynamic_name_column').append("<option></option>");
                    $('#dynamic_number_column').append("<option></option>");
                    $('#dynamic_amount_column').append("<option></option>");
                    $('#dynamic_number_type_column').append("<option></option>");
                    $('#dynamic_remarks_column').append("<option></option>");
                    $('#dynamic_number_operator_column').append("<option></option>");
                    
                    $.each(data.columns, function (key, value) {
                        $("#dynamic_name_column").append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $("#dynamic_amount_column").append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_type_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_remarks_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        $('#dynamic_number_operator_column').append("<option value='"+ countColumn +"'>"+ value +"</option>");
                        countColumn++;
                    });
                    $(".dynamic_msg").show();
                }
            },
            complete: function () {
                $("#loading").hide();
            },
        });

    });
}





// preview upload file

/*sms send form submit*/
function check_upload_file(form_id, route) {

    $(function () {

        var formData = new FormData($('#' + form_id)[0]);
        // formData.append("X-CSRF-Token", $('input[name="_token"]').val());

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'post',
            url: route,
            data: formData,
            dataType: 'JSON',
            contentType: false,
            processData: false,
            beforeSend: function () {
                $("#loading").show();
            },
            success: function (data) {
                $("#columnNames").empty();
                $("#dynamic_number_column").empty();
                $('.error_messages').empty();
                $('.success_messages').empty();
                if (data.errors) {
                    $('.ajax_success').hide();
                    $('.ajax_error').show();
                    $.each(data.errors, function (key, value) {
                        $('.error_messages').append('<p>' + value + '</p>');
                    });
                    $("html, body").animate({scrollTop: 0}, 1000);
                }
                if (data.success) {
                    $('.ajax_error').hide();
                    $(".search-choice-close").click();
                    // $('.ajax_success').show();
                    $('.success_messages').append('<p>' + data.success + '</p>');
                    $("html, body").animate({scrollTop: 100}, 1000);
                    $("#sufdpt_total_number").html(data.total_number);
                    $("#sufdpt_total_submitted_number").html(data.total_submitted_number);
                    $("#sufdpt_total_valid_number").html(data.total_valid_number);
                    $("#sufdpt_duplicate_number").html(data.total_duplicate_number);
                    $("#sufdpt_total_valid_unique_number").html(data.total_valid_unique_number);
                    $("#sufdpt_total_sms").html(data.sms_count);
                    $("#sufdpt_total_cost").html(data.total_cost);
                    var newText = data.sms_content.replace(/\n/g , "<br>");
                    $("#show_sms_content").html(newText);
                    
                    $("#file_preview_content").show();
                    // $("#upload_file_preview_detail_modal").modal('show');
                }
                if (data.error) {
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
}