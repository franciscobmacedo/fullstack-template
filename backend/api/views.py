from ninja import NinjaAPI


description = """template for the api"""
api = NinjaAPI(
    title="template for the api",
    description=description,
    version="1.0.0",
    docs_url="/",
)


@api.get("/home")
def home(request):
    return {"message": "Custom Hello World"}
