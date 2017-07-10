class Bay2Controller < ApplicationController

  def index
    @bay2s = Bay2.all
    render json: @bay2s
  end

end
