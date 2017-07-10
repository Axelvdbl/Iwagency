class Mech2Controller < ApplicationController

  def index
    @mech2s = Mech2.all
    render json: @mech2s
  end

end
