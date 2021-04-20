using concorrencia.domain;
using concorrencia.repository;
using concorrencia.web.Custom;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostoController: ControllerBase
    {
        private readonly IConcorrenciaRepository _repo;

        public PostoController (IConcorrenciaRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllPostos();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!! " + ex.Message);
            }
        }

        [ClaimsAuthorize("Posto", "Incluir")]
        [HttpPost]
        public async Task<ActionResult> Post(Posto model)
        {
            try
            {
                _repo.Add(model);
               if (await _repo.SaveChangesAsync())
                {
                    return Created($"/posto/{model.id}", model);
                }
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!! " + ex.Message);
            }

            return BadRequest();
        }
    }
}
