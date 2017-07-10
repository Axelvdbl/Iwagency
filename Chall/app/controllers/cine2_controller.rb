class Cine2Controller < ApplicationController

  def index
    @cine2s = Cine2.all
    render json: @cine2s
  end

end
