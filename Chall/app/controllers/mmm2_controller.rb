class Mmm2Controller < ApplicationController

  def index
    @mmm2s = Mmm2.all
    render json: @mmm2s
  end

end
