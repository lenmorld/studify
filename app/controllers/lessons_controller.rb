class LessonsController < ApplicationController

    # suggested order: index, show, new, edit, create, update, destroy

    def index
        @lessons = Lesson.all
    end

    def show
        @lesson = Lesson.find(params[:id])
    end

    def new
        @lesson = Lesson.new
    end

    def edit
        @lesson = Lesson.find(params[:id])
    end

    def create
        # inspect params
        # render plain: params[:lesson].inspect

        # NOT SECURE
        # @lesson = Lesson.new(params[:lesson])

        @lesson = Lesson.new(lesson_params)

        # @lesson.save returns `false` if validation fails
        if @lesson.save
            # redirect is another request
            redirect_to @lesson
        else 
            # pass @lesson object back to new.html.erb
            # rendering is the same request as form submission
            render 'new'
        end

    end

    def update
        @lesson = Lesson.find(@params[:id])

        if @lesson.update(lesson_params)
            redirect_to @lesson
        else 
            render 'edit'
        end
    end

    private
        # make "strong params" method reusable between create, update
        def lesson_params
            params.require(:lesson).permit(:title, :text)
        end
end
