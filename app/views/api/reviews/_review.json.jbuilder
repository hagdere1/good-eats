json.extract!(
  review,
  :id, :user_id, :edible_id, :title, :body
)

json.created_at review.created_at.strftime("%B %d, %Y, %H:%M")
json.user review.user.name
json.edible review.edible
