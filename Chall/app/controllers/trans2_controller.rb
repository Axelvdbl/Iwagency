class Trans2Controller < ApplicationController

  def index
    @trans2s = Trans2.all
    render json: @trans2s
  end

end
