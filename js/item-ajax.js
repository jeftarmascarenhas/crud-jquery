$(document).ready(function  () {

  'use strict';

  var page          = 1,
      current_page  = 1,
      total_page    = 0,
      is_ajax_fire  = 0
      ;

  manageData();

  function manageData () {
    $.ajax({
      dataType: 'json',
      url: url+'api/getData.php',
      data: {page:page}
    })
    .done(function (data) {
      total_page = Math.ceil(data.total/10);
      current_page = page;

      $('#pagination').twbsPagination({
        totalPages: total_page,
        visiblePages: current_page,
        onPageClick: function  (event, pageL) {
          page = pageL;
          if(is_ajax_fire != 0 ) {
            getPageData();
          }
        }
      });

      manageRow(data.data);
      is_ajax_fire = 1;

    });
  }

  function getPageData () {
    $.ajax({
      dataType: 'json',
      url: url+'api/getData.php',
      data: {page:page},
    })
    .done(function  (data) {
      manageRow(data.data);
    });
  }

  function manageRow (data) {
    var rows = '';
    $.each(data, function  (key, value) {
      rows += '<tr>';
      rows += '<td>'+value.title+'</td>';
      rows += '<td>'+value.description+'</td>';
      rows += '<td data-id="'+value.id+'+">';
      rows += '<button data-toggle="mdoal" data-target="#edit-item" class="btn btn-primary edit-item">Editar</button>';
      rows += '<button class="btn btn-danger remove-item">Remover</button>';
      rows += '</tr>';

      $('tbody').html(rows);

    });
  }

  $('.crud-submit').click(function  (event) {
    event.preventDefault();
    var form_action = $('#create-item').find('form').attr('action')
        title = $('#create-item').find('input[name="title"]').val()
        description = $('#create-item').find('textarea[name="description"]').val();

        if(title != '' && description != '') {
          $.ajax({
            dataType: 'json',
            type: 'POST',
            url: url + form_action,
            data: {title:title, description: description},
          })
          .done(function  (data) {
            $('#create-item').find('input[name="title"').val('');
            $('#create-item').find('textarea[name="description"]').val('');
            getPageData();
            $('.modal').modal('hide');
            toastr.success('Item creado com sucesso!', 'Success Alert', {timeOut: 5000});
          });
        }
        else {
          toastr.success('Entre com o título e a descrição', 'Error Alert', {timeOut: 2000});
        }
  });

});