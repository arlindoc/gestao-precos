using System;
using System.Threading.Tasks;
using concorrencia.domain;
using concorrencia.repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace concorrencia.web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FinanceiroController: ControllerBase
    {
           private readonly IConcorrenciaRepository _repo;
           public FinanceiroController(IConcorrenciaRepository repo)
           {
               _repo = repo;
           }
        
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllLucros();
                return Ok(results);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou!!! " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Financeiro model)
        {
            try
            {
                _repo.Add(model);
               if (await _repo.SaveChangesAsync())
                {
                    return Created($"/financeiro/{model.id}", model);
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