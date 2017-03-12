$(document).ready(function  () {

  'use strict';

  var page          = 1,
  current_page  = 1,
  total_page    = 0,
  is_ajax_fire  = 0;

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
    data.forEach(function  (value) {
      rows += '<tr>';
      rows += '<td>'+value.title+'</td>';
      rows += '<td>'+value.description+'</td>';
      rows += '<td data-id="'+value.id+'">';
      rows += '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Editar</button>';
      rows += '<button class="btn btn-danger remove-item">Remover</button>';
      rows += '</tr>';

      $('tbody').html(rows);
    });

  }

  $('.crud-submit').click(function  (event) {
    event.preventDefault();
    var form_action = $('#create-item').find('form').attr('action'),
    title = $('#create-item').find('input[name="title"]').val(),
    description = $('#create-item').find('textarea[name="description"]').val();

    if(title != '' && description != '') {
      $.ajax({
        dataType: 'json',
        type: 'POST',
        url: url + form_action,
        data: {title:title, description: description},
      })
      .done(function  (data) {
        $('#create-item').find('input[name="title"]').val('');
        $('#create-item').find('textarea[name="description"]').val('');
        getPageData();
        $('.modal').modal('hide');
        toastr.success('Item creado com sucesso!', 'Parabéns', {timeOut: 5000});
      });
    }
    else {
      toastr.error('Entre com o título e a descrição', 'Opss', {timeOut: 2000});
    }
  });

  $('body').on('click', '.remove-item', function  () {
    var id    = $(this).parent('td').data('id'),
        c_obj = $(this).parents('tr');

    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: url+'api/delete.php',
      data: {id: id},
    })
    .done(function  (data) {
      c_obj.remove();
      toastr.success('Item removido com sucesso!', 'Parabéns', {timeOut:5000});
      getPageData();
    });

  });

  $('body').on('click', '.edit-item', function  (event) {
      var id = $(this).parent('td').data('id'),
          title = $(this).parent("td").prev("td").prev("td").text(),
          description = $(this).parent('td').prev('td').text();
          $('#edit-item').find('input[name="title"]').val(title);
          $('#edit-item').find('textarea[name="description"]').val(description);
          $('#edit-item').find('input[name="id"]').val(id);

    });

    $('.crud-submit-edit').click(function  (event) {
      event.preventDefault();
      var form_action = $('#edit-item').find('form').attr('action'),
      title       = $('#edit-item').find('input[name="title"]').val(),
      description = $('#edit-item').find('textarea[name="description"]').val(),
      id = $('#edit-item').find('.edit-id').val();

      if(title != '' && description != '') {
        debugger;
        $.ajax({
          dataType: 'json',
          type: 'POST',
          url: url+form_action,
          data: {title: title, description: description, id: id}
        })
        .done(function  (data) {
          getPageData();
          $('.modal').modal('hide');
          toastr.success('Item atualizado com sucesso!', 'Success Alert', {timeOut: 5000});
        });
      }
      else {
        toastr.success('Item não pode ser atualizado!', 'Success Alert', {timeOut: 3000});
      }

    });

});