class Transp2Controller < ApplicationController

  def index
    @transp2s = Transp2.all
    render json: @transp2s
  end

end
