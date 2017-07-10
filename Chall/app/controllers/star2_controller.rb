class Star2Controller < ApplicationController

    def index
      @star2s = Star2.all
      render json: @star2s
    end

end
