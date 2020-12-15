const CouponCodes = () => {
  return (
    <div className="box">
      <div className="box-header">
        <h4 className="mb-0">Cupão de desconto</h4>
      </div>
      <p className="text-muted">
        Se tem um cupão de desconto, por favor introduza o código em baixo.
      </p>
      <form>
        <div className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-append">
            <button type="button" className="btn btn-primary">
              <i className="fa fa-gift"></i>
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default CouponCodes;
