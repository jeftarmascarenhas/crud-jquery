<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Crud Ajax with jQuery</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
  </head>
  <body>
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="container">
      <div class="row">
        <div class="col-lg-12 margin-tb">
            <h2>
              Crud Ajax with jQuery
              <div class="pull-right">
                <button class="btn btn-success" data-toggle="modal" data-target="#create-item">Cria Item</button>
              </div>
            </h2>
        </div>
      </div>

      <table class="table table-bordered">
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Descrição</td>
            <td with="200">Açõe</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

      <ul id="pagination" class="pagination-sm"></ul>

      <!--Modal create item-->
      <div class="modal fade" id="create-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
              <h4 class="modal-title" id="myModalLabel">Criar Item</h4>
              </div>
              <div class="modal-body">
                <form data-toggle="validator" action="api/create.php" method="POST">
                  <div class="form-group">
                    <label class="control-label" for="title">Título</label>
                    <input type="text" name="title" value="" class="form-control" placeholder="Titulo do item" data-error="Por favor entre com o título" required />
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="description">Descrição</label>
                    <textarea name="description" class="form-control" placeholder="Descrição do item" data-error="Por favor entre com a descrição" required></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn crud-submit btn-success">Cadastrar</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>

      <!--Modal edit item-->
      <div class="modal fade" id="edit-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" arial-label="Close">
                <span arial-hidden="true">x</span>
                <h4 class="modal-titlemyModalLabel">Edit Item</h4>
              </button>
            </div>
            <div class="modal-body">
              <form data-toggle="validator" action="api/update.php" method="PUT">
                <input type="hidden" name="id" class="edit-id">
                <div class="form-group">
                  <label for="title" class="control-label">Títle</label>
                  <input type="text" name="title" class="form-control" data-error="Entre com o título" placeholder="Entre com o título" required />
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <label for="description" class="control-label">Descrição</label>
                  <textarea class="form-control" name="description" data-error="Entre com a descrição" placeholder="Entre com a descrição"></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-success crud-submit-edit">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>



    <script>
      var url =  'localhost/envent';
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.3.1/jquery.twbsPagination.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.5/validator.min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="js/item-ajax.js"></script>
  </body>
</html>