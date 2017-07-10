class Seign1Controller < ApplicationController

  def index
    @seign1s = Seign1.all
    render json: @seign1s
  end

end
