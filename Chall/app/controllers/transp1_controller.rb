class Transp1Controller < ApplicationController

    def index
      @transp1s = Transp1.all
      render json: @transp1s
    end

end
