class Salle5Controller < ApplicationController

  def index
    @salle5s = Salle5.all
    render json: @salle5s
  end

end
