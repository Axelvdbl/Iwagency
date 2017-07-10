class Pirate2Controller < ApplicationController

  def index
    @pirate2s = Pirate2.all
    render json: @pirate2s
  end

end
