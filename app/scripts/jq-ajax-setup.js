$.ajaxSetup({
    headers: {
       'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
       // 'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'
    }
});