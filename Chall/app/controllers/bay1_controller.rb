class Bay1Controller < ApplicationController

  def index
    @bay1s = Bay1.all
    render json: @bay1s
  end

end
