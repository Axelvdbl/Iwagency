class Fast1Controller < ApplicationController

  def index
    @fast1s = Fast1.all
    render json: @fast1s
  end

end
