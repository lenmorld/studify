class LessonsController < ApplicationController
    def new
    end

    def create
        # inspect params
        # render plain: params[:lesson].inspect

        @lesson = Lesson.new(params[:lesson])

        @lesson.save

        redirect_to @lesson
    end
end
