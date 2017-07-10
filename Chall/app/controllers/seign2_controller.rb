class Seign2Controller < ApplicationController

  def index
    @seign2s = Seign2.all
    render json: @seign2s
  end

end
