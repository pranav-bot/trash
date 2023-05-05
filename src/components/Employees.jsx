export default function Employees({
  selectedValue,
  handleSelection,
  name,
  id,
  img,
}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <select
            name=""
            id=""
            className="form-select form-select-lg"
            value={selectedValue}
            onChange={handleSelection}
          >
            <option value="Ram">Ram</option>
            <option value="Suraj">Suraj</option>
            <option value="Laxman">Laxman</option>
          </select>
        </div>
        <div
          class="card border-primary mb-3
                mt-5"
          style={{ maxWidth: 540 }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">ID: {id}</p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
