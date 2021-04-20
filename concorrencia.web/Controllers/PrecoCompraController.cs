using concorrencia.domain;
using concorrencia.repository;
using concorrencia.web.Custom;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrecoCompraController : ControllerBase
    {
        public readonly IConcorrenciaRepository _repo;
        public PrecoCompraController(IConcorrenciaRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllPrecosCompra();
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!!" + ex.Message);
            }
        }

        [ClaimsAuthorize("Compra", "Incluir")]
        [HttpPost]
        public async Task<ActionResult> Post(PrecoCompra model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Created($"/precoCompra/{model.Id}", model);
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

            return BadRequest();
        }
    }

}
