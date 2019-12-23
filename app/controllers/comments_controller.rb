class CommentsController < ApplicationController
    def create
        @lesson = Lesson.find(params[:lesson_id])
        @coment = @lesson.comments.create(comment_params)
        redirect_to lesson_path(@lesson)
    end

    private
        def comment_params
            params.require(:comment).permit(:commenter, :body)
        end
end
