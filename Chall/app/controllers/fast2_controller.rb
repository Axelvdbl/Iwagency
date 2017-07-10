class Fast2Controller < ApplicationController

  def index
    @fast2s = Fast2.all
    render json: @fast2s
  end

end
