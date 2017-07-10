class Mmm1Controller < ApplicationController

  def index
    @mmm1s = Mmm1.all
    render json: @mmm1s
  end

end
